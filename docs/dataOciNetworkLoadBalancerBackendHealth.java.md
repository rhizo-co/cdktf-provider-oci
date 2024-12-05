# `dataOciNetworkLoadBalancerBackendHealth` Submodule <a name="`dataOciNetworkLoadBalancerBackendHealth` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkLoadBalancerBackendHealth <a name="DataOciNetworkLoadBalancerBackendHealth" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health oci_network_load_balancer_backend_health}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_health.DataOciNetworkLoadBalancerBackendHealth;

DataOciNetworkLoadBalancerBackendHealth.Builder.create(Construct scope, java.lang.String id)
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
    .backendName(java.lang.String)
    .backendSetName(java.lang.String)
    .networkLoadBalancerId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.backendName">backendName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#backend_name DataOciNetworkLoadBalancerBackendHealth#backend_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.backendSetName">backendSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#backend_set_name DataOciNetworkLoadBalancerBackendHealth#backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#network_load_balancer_id DataOciNetworkLoadBalancerBackendHealth#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#id DataOciNetworkLoadBalancerBackendHealth#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendName`<sup>Required</sup> <a name="backendName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.backendName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#backend_name DataOciNetworkLoadBalancerBackendHealth#backend_name}.

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.backendSetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#backend_set_name DataOciNetworkLoadBalancerBackendHealth#backend_set_name}.

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.networkLoadBalancerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#network_load_balancer_id DataOciNetworkLoadBalancerBackendHealth#network_load_balancer_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#id DataOciNetworkLoadBalancerBackendHealth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkLoadBalancerBackendHealth resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_health.DataOciNetworkLoadBalancerBackendHealth;

DataOciNetworkLoadBalancerBackendHealth.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_health.DataOciNetworkLoadBalancerBackendHealth;

DataOciNetworkLoadBalancerBackendHealth.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_health.DataOciNetworkLoadBalancerBackendHealth;

DataOciNetworkLoadBalancerBackendHealth.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_health.DataOciNetworkLoadBalancerBackendHealth;

DataOciNetworkLoadBalancerBackendHealth.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciNetworkLoadBalancerBackendHealth.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciNetworkLoadBalancerBackendHealth resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciNetworkLoadBalancerBackendHealth to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciNetworkLoadBalancerBackendHealth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkLoadBalancerBackendHealth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.healthCheckResults">healthCheckResults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList">DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.backendNameInput">backendNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.backendSetNameInput">backendSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.networkLoadBalancerIdInput">networkLoadBalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.backendName">backendName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.backendSetName">backendSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `healthCheckResults`<sup>Required</sup> <a name="healthCheckResults" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.healthCheckResults"></a>

```java
public DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList getHealthCheckResults();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList">DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `backendNameInput`<sup>Optional</sup> <a name="backendNameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.backendNameInput"></a>

```java
public java.lang.String getBackendNameInput();
```

- *Type:* java.lang.String

---

##### `backendSetNameInput`<sup>Optional</sup> <a name="backendSetNameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.backendSetNameInput"></a>

```java
public java.lang.String getBackendSetNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkLoadBalancerIdInput`<sup>Optional</sup> <a name="networkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.networkLoadBalancerIdInput"></a>

```java
public java.lang.String getNetworkLoadBalancerIdInput();
```

- *Type:* java.lang.String

---

##### `backendName`<sup>Required</sup> <a name="backendName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.backendName"></a>

```java
public java.lang.String getBackendName();
```

- *Type:* java.lang.String

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.backendSetName"></a>

```java
public java.lang.String getBackendSetName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.networkLoadBalancerId"></a>

```java
public java.lang.String getNetworkLoadBalancerId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealth.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkLoadBalancerBackendHealthConfig <a name="DataOciNetworkLoadBalancerBackendHealthConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_health.DataOciNetworkLoadBalancerBackendHealthConfig;

DataOciNetworkLoadBalancerBackendHealthConfig.builder()
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
    .backendName(java.lang.String)
    .backendSetName(java.lang.String)
    .networkLoadBalancerId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.backendName">backendName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#backend_name DataOciNetworkLoadBalancerBackendHealth#backend_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.backendSetName">backendSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#backend_set_name DataOciNetworkLoadBalancerBackendHealth#backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#network_load_balancer_id DataOciNetworkLoadBalancerBackendHealth#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#id DataOciNetworkLoadBalancerBackendHealth#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendName`<sup>Required</sup> <a name="backendName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.backendName"></a>

```java
public java.lang.String getBackendName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#backend_name DataOciNetworkLoadBalancerBackendHealth#backend_name}.

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.backendSetName"></a>

```java
public java.lang.String getBackendSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#backend_set_name DataOciNetworkLoadBalancerBackendHealth#backend_set_name}.

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.networkLoadBalancerId"></a>

```java
public java.lang.String getNetworkLoadBalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#network_load_balancer_id DataOciNetworkLoadBalancerBackendHealth#network_load_balancer_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_health#id DataOciNetworkLoadBalancerBackendHealth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciNetworkLoadBalancerBackendHealthHealthCheckResults <a name="DataOciNetworkLoadBalancerBackendHealthHealthCheckResults" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_health.DataOciNetworkLoadBalancerBackendHealthHealthCheckResults;

DataOciNetworkLoadBalancerBackendHealthHealthCheckResults.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList <a name="DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_health.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList;

new DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.get"></a>

```java
public DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference <a name="DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_health.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference;

new DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.healthCheckStatus">healthCheckStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResults">DataOciNetworkLoadBalancerBackendHealthHealthCheckResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthCheckStatus`<sup>Required</sup> <a name="healthCheckStatus" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.healthCheckStatus"></a>

```java
public java.lang.String getHealthCheckStatus();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.internalValue"></a>

```java
public DataOciNetworkLoadBalancerBackendHealthHealthCheckResults getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendHealth.DataOciNetworkLoadBalancerBackendHealthHealthCheckResults">DataOciNetworkLoadBalancerBackendHealthHealthCheckResults</a>

---



