# `dataOciOspGatewaySubscriptions` Submodule <a name="`dataOciOspGatewaySubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewaySubscriptions <a name="DataOciOspGatewaySubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions oci_osp_gateway_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptions;

DataOciOspGatewaySubscriptions.Builder.create(Construct scope, java.lang.String id)
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
    .ospHomeRegion(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOspGatewaySubscriptionsFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#compartment_id DataOciOspGatewaySubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#osp_home_region DataOciOspGatewaySubscriptions#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#id DataOciOspGatewaySubscriptions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#compartment_id DataOciOspGatewaySubscriptions#compartment_id}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.ospHomeRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#osp_home_region DataOciOspGatewaySubscriptions#osp_home_region}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#filter DataOciOspGatewaySubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#id DataOciOspGatewaySubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOspGatewaySubscriptionsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOspGatewaySubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptions;

DataOciOspGatewaySubscriptions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptions;

DataOciOspGatewaySubscriptions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptions;

DataOciOspGatewaySubscriptions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptions;

DataOciOspGatewaySubscriptions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOspGatewaySubscriptions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOspGatewaySubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOspGatewaySubscriptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOspGatewaySubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewaySubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList">DataOciOspGatewaySubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.subscriptionCollection">subscriptionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList">DataOciOspGatewaySubscriptionsSubscriptionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.ospHomeRegionInput">ospHomeRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.filter"></a>

```java
public DataOciOspGatewaySubscriptionsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList">DataOciOspGatewaySubscriptionsFilterList</a>

---

##### `subscriptionCollection`<sup>Required</sup> <a name="subscriptionCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.subscriptionCollection"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionList getSubscriptionCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList">DataOciOspGatewaySubscriptionsSubscriptionCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ospHomeRegionInput`<sup>Optional</sup> <a name="ospHomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.ospHomeRegionInput"></a>

```java
public java.lang.String getOspHomeRegionInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.ospHomeRegion"></a>

```java
public java.lang.String getOspHomeRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewaySubscriptionsConfig <a name="DataOciOspGatewaySubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsConfig;

DataOciOspGatewaySubscriptionsConfig.builder()
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
    .ospHomeRegion(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOspGatewaySubscriptionsFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#compartment_id DataOciOspGatewaySubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#osp_home_region DataOciOspGatewaySubscriptions#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#id DataOciOspGatewaySubscriptions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#compartment_id DataOciOspGatewaySubscriptions#compartment_id}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.ospHomeRegion"></a>

```java
public java.lang.String getOspHomeRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#osp_home_region DataOciOspGatewaySubscriptions#osp_home_region}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#filter DataOciOspGatewaySubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#id DataOciOspGatewaySubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOspGatewaySubscriptionsFilter <a name="DataOciOspGatewaySubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsFilter;

DataOciOspGatewaySubscriptionsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#name DataOciOspGatewaySubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#values DataOciOspGatewaySubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#regex DataOciOspGatewaySubscriptions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#name DataOciOspGatewaySubscriptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#values DataOciOspGatewaySubscriptions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#regex DataOciOspGatewaySubscriptions#regex}.

---

### DataOciOspGatewaySubscriptionsSubscriptionCollection <a name="DataOciOspGatewaySubscriptionsSubscriptionCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection;

DataOciOspGatewaySubscriptionsSubscriptionCollection.builder()
    .build();
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItems <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems;

DataOciOspGatewaySubscriptionsSubscriptionCollectionItems.builder()
    .build();
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress;

DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress.builder()
    .build();
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway;

DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway.builder()
    .build();
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData;

DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData.builder()
    .build();
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions;

DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions.builder()
    .build();
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription;

DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription.builder()
    .build();
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress;

DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress.builder()
    .build();
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway;

DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway.builder()
    .build();
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData;

DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData.builder()
    .build();
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions;

DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions.builder()
    .build();
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo;

DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo.builder()
    .build();
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo;

DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewaySubscriptionsFilterList <a name="DataOciOspGatewaySubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsFilterList;

new DataOciOspGatewaySubscriptionsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.get"></a>

```java
public DataOciOspGatewaySubscriptionsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>>

---


### DataOciOspGatewaySubscriptionsFilterOutputReference <a name="DataOciOspGatewaySubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference;

new DataOciOspGatewaySubscriptionsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.get"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.addressKey">addressKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.contributorClass">contributorClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.county">county</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.departmentName">departmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.internalNumber">internalNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line1">line1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line2">line2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line3">line3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line4">line4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.middleName">middleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.municipalInscription">municipalInscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.phoneCountryCode">phoneCountryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.stateInscription">stateInscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.streetName">streetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.streetNumber">streetNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressKey`<sup>Required</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.addressKey"></a>

```java
public java.lang.String getAddressKey();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `contributorClass`<sup>Required</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.contributorClass"></a>

```java
public java.lang.String getContributorClass();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

---

##### `departmentName`<sup>Required</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.departmentName"></a>

```java
public java.lang.String getDepartmentName();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `internalNumber`<sup>Required</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.internalNumber"></a>

```java
public java.lang.String getInternalNumber();
```

- *Type:* java.lang.String

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line1"></a>

```java
public java.lang.String getLine1();
```

- *Type:* java.lang.String

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line2"></a>

```java
public java.lang.String getLine2();
```

- *Type:* java.lang.String

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line3"></a>

```java
public java.lang.String getLine3();
```

- *Type:* java.lang.String

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line4"></a>

```java
public java.lang.String getLine4();
```

- *Type:* java.lang.String

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

---

##### `municipalInscription`<sup>Required</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.municipalInscription"></a>

```java
public java.lang.String getMunicipalInscription();
```

- *Type:* java.lang.String

---

##### `phoneCountryCode`<sup>Required</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.phoneCountryCode"></a>

```java
public java.lang.String getPhoneCountryCode();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateInscription`<sup>Required</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.stateInscription"></a>

```java
public java.lang.String getStateInscription();
```

- *Type:* java.lang.String

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.streetName"></a>

```java
public java.lang.String getStreetName();
```

- *Type:* java.lang.String

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.streetNumber"></a>

```java
public java.lang.String getStreetNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.get"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.accountType">accountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.billingAddress">billingAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.billToCustAccountId">billToCustAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.gsiOrgCode">gsiOrgCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.isIntentToPay">isIntentToPay</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.paymentGateway">paymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.paymentOptions">paymentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.planType">planType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.shipToCustAcctRoleId">shipToCustAcctRoleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.shipToCustAcctSiteId">shipToCustAcctSiteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscription">subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscriptionPlanNumber">subscriptionPlanNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.taxInfo">taxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timePersonalToCorporateConv">timePersonalToCorporateConv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timePlanUpgrade">timePlanUpgrade</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timeStart">timeStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.upgradeState">upgradeState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.upgradeStateDetails">upgradeStateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems">DataOciOspGatewaySubscriptionsSubscriptionCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.accountType"></a>

```java
public java.lang.String getAccountType();
```

- *Type:* java.lang.String

---

##### `billingAddress`<sup>Required</sup> <a name="billingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.billingAddress"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList getBillingAddress();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList</a>

---

##### `billToCustAccountId`<sup>Required</sup> <a name="billToCustAccountId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.billToCustAccountId"></a>

```java
public java.lang.String getBillToCustAccountId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `gsiOrgCode`<sup>Required</sup> <a name="gsiOrgCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.gsiOrgCode"></a>

```java
public java.lang.String getGsiOrgCode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isIntentToPay`<sup>Required</sup> <a name="isIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.isIntentToPay"></a>

```java
public IResolvable getIsIntentToPay();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.ospHomeRegion"></a>

```java
public java.lang.String getOspHomeRegion();
```

- *Type:* java.lang.String

---

##### `paymentGateway`<sup>Required</sup> <a name="paymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.paymentGateway"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList getPaymentGateway();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList</a>

---

##### `paymentOptions`<sup>Required</sup> <a name="paymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.paymentOptions"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList getPaymentOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList</a>

---

##### `planType`<sup>Required</sup> <a name="planType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.planType"></a>

```java
public java.lang.String getPlanType();
```

- *Type:* java.lang.String

---

##### `shipToCustAcctRoleId`<sup>Required</sup> <a name="shipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.shipToCustAcctRoleId"></a>

```java
public java.lang.String getShipToCustAcctRoleId();
```

- *Type:* java.lang.String

---

##### `shipToCustAcctSiteId`<sup>Required</sup> <a name="shipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.shipToCustAcctSiteId"></a>

```java
public java.lang.String getShipToCustAcctSiteId();
```

- *Type:* java.lang.String

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscription"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList getSubscription();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList</a>

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `subscriptionPlanNumber`<sup>Required</sup> <a name="subscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscriptionPlanNumber"></a>

```java
public java.lang.String getSubscriptionPlanNumber();
```

- *Type:* java.lang.String

---

##### `taxInfo`<sup>Required</sup> <a name="taxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.taxInfo"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList getTaxInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList</a>

---

##### `timePersonalToCorporateConv`<sup>Required</sup> <a name="timePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timePersonalToCorporateConv"></a>

```java
public java.lang.String getTimePersonalToCorporateConv();
```

- *Type:* java.lang.String

---

##### `timePlanUpgrade`<sup>Required</sup> <a name="timePlanUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timePlanUpgrade"></a>

```java
public java.lang.String getTimePlanUpgrade();
```

- *Type:* java.lang.String

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timeStart"></a>

```java
public java.lang.String getTimeStart();
```

- *Type:* java.lang.String

---

##### `upgradeState`<sup>Required</sup> <a name="upgradeState" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.upgradeState"></a>

```java
public java.lang.String getUpgradeState();
```

- *Type:* java.lang.String

---

##### `upgradeStateDetails`<sup>Required</sup> <a name="upgradeStateDetails" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.upgradeStateDetails"></a>

```java
public java.lang.String getUpgradeStateDetails();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems">DataOciOspGatewaySubscriptionsSubscriptionCollectionItems</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.get"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.get"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">cloudAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">promoType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudAccountName`<sup>Required</sup> <a name="cloudAccountName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```java
public java.lang.String getCloudAccountName();
```

- *Type:* java.lang.String

---

##### `promoType`<sup>Required</sup> <a name="promoType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```java
public java.lang.String getPromoType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.merchantDefinedData">merchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `merchantDefinedData`<sup>Required</sup> <a name="merchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList getMerchantDefinedData();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.get"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.creditCardType">creditCardType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.extBillingAgreementId">extBillingAgreementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.lastDigits">lastDigits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.nameOnCard">nameOnCard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.paymentMethod">paymentMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.timeExpiration">timeExpiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.walletInstrumentId">walletInstrumentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.walletTransactionId">walletTransactionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `creditCardType`<sup>Required</sup> <a name="creditCardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.creditCardType"></a>

```java
public java.lang.String getCreditCardType();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `extBillingAgreementId`<sup>Required</sup> <a name="extBillingAgreementId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```java
public java.lang.String getExtBillingAgreementId();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastDigits`<sup>Required</sup> <a name="lastDigits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.lastDigits"></a>

```java
public java.lang.String getLastDigits();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `nameOnCard`<sup>Required</sup> <a name="nameOnCard" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.nameOnCard"></a>

```java
public java.lang.String getNameOnCard();
```

- *Type:* java.lang.String

---

##### `paymentMethod`<sup>Required</sup> <a name="paymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.paymentMethod"></a>

```java
public java.lang.String getPaymentMethod();
```

- *Type:* java.lang.String

---

##### `timeExpiration`<sup>Required</sup> <a name="timeExpiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.timeExpiration"></a>

```java
public java.lang.String getTimeExpiration();
```

- *Type:* java.lang.String

---

##### `walletInstrumentId`<sup>Required</sup> <a name="walletInstrumentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```java
public java.lang.String getWalletInstrumentId();
```

- *Type:* java.lang.String

---

##### `walletTransactionId`<sup>Required</sup> <a name="walletTransactionId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.walletTransactionId"></a>

```java
public java.lang.String getWalletTransactionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.get"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.addressKey">addressKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.contributorClass">contributorClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.county">county</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.departmentName">departmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.internalNumber">internalNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line1">line1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line2">line2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line3">line3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line4">line4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.middleName">middleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.municipalInscription">municipalInscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.phoneCountryCode">phoneCountryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.stateInscription">stateInscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.streetName">streetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.streetNumber">streetNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressKey`<sup>Required</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.addressKey"></a>

```java
public java.lang.String getAddressKey();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `contributorClass`<sup>Required</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```java
public java.lang.String getContributorClass();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

---

##### `departmentName`<sup>Required</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.departmentName"></a>

```java
public java.lang.String getDepartmentName();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `internalNumber`<sup>Required</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```java
public java.lang.String getInternalNumber();
```

- *Type:* java.lang.String

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line1"></a>

```java
public java.lang.String getLine1();
```

- *Type:* java.lang.String

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line2"></a>

```java
public java.lang.String getLine2();
```

- *Type:* java.lang.String

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line3"></a>

```java
public java.lang.String getLine3();
```

- *Type:* java.lang.String

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line4"></a>

```java
public java.lang.String getLine4();
```

- *Type:* java.lang.String

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

---

##### `municipalInscription`<sup>Required</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```java
public java.lang.String getMunicipalInscription();
```

- *Type:* java.lang.String

---

##### `phoneCountryCode`<sup>Required</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```java
public java.lang.String getPhoneCountryCode();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateInscription`<sup>Required</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```java
public java.lang.String getStateInscription();
```

- *Type:* java.lang.String

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.streetName"></a>

```java
public java.lang.String getStreetName();
```

- *Type:* java.lang.String

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```java
public java.lang.String getStreetNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.get"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.accountType">accountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.billingAddress">billingAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.billToCustAccountId">billToCustAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.gsiOrgCode">gsiOrgCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.isIntentToPay">isIntentToPay</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.paymentGateway">paymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.paymentOptions">paymentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.planType">planType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.shipToCustAcctRoleId">shipToCustAcctRoleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.shipToCustAcctSiteId">shipToCustAcctSiteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.subscriptionPlanNumber">subscriptionPlanNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.taxInfo">taxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timePersonalToCorporateConv">timePersonalToCorporateConv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timePlanUpgrade">timePlanUpgrade</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timeStart">timeStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.upgradeState">upgradeState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.upgradeStateDetails">upgradeStateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.accountType"></a>

```java
public java.lang.String getAccountType();
```

- *Type:* java.lang.String

---

##### `billingAddress`<sup>Required</sup> <a name="billingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.billingAddress"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList getBillingAddress();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList</a>

---

##### `billToCustAccountId`<sup>Required</sup> <a name="billToCustAccountId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.billToCustAccountId"></a>

```java
public java.lang.String getBillToCustAccountId();
```

- *Type:* java.lang.String

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

---

##### `gsiOrgCode`<sup>Required</sup> <a name="gsiOrgCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.gsiOrgCode"></a>

```java
public java.lang.String getGsiOrgCode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isIntentToPay`<sup>Required</sup> <a name="isIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.isIntentToPay"></a>

```java
public IResolvable getIsIntentToPay();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `paymentGateway`<sup>Required</sup> <a name="paymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.paymentGateway"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList getPaymentGateway();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList</a>

---

##### `paymentOptions`<sup>Required</sup> <a name="paymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.paymentOptions"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList getPaymentOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList</a>

---

##### `planType`<sup>Required</sup> <a name="planType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.planType"></a>

```java
public java.lang.String getPlanType();
```

- *Type:* java.lang.String

---

##### `shipToCustAcctRoleId`<sup>Required</sup> <a name="shipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.shipToCustAcctRoleId"></a>

```java
public java.lang.String getShipToCustAcctRoleId();
```

- *Type:* java.lang.String

---

##### `shipToCustAcctSiteId`<sup>Required</sup> <a name="shipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.shipToCustAcctSiteId"></a>

```java
public java.lang.String getShipToCustAcctSiteId();
```

- *Type:* java.lang.String

---

##### `subscriptionPlanNumber`<sup>Required</sup> <a name="subscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.subscriptionPlanNumber"></a>

```java
public java.lang.String getSubscriptionPlanNumber();
```

- *Type:* java.lang.String

---

##### `taxInfo`<sup>Required</sup> <a name="taxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.taxInfo"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList getTaxInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList</a>

---

##### `timePersonalToCorporateConv`<sup>Required</sup> <a name="timePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timePersonalToCorporateConv"></a>

```java
public java.lang.String getTimePersonalToCorporateConv();
```

- *Type:* java.lang.String

---

##### `timePlanUpgrade`<sup>Required</sup> <a name="timePlanUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timePlanUpgrade"></a>

```java
public java.lang.String getTimePlanUpgrade();
```

- *Type:* java.lang.String

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timeStart"></a>

```java
public java.lang.String getTimeStart();
```

- *Type:* java.lang.String

---

##### `upgradeState`<sup>Required</sup> <a name="upgradeState" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.upgradeState"></a>

```java
public java.lang.String getUpgradeState();
```

- *Type:* java.lang.String

---

##### `upgradeStateDetails`<sup>Required</sup> <a name="upgradeStateDetails" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.upgradeStateDetails"></a>

```java
public java.lang.String getUpgradeStateDetails();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.get"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.get"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">cloudAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">promoType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudAccountName`<sup>Required</sup> <a name="cloudAccountName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```java
public java.lang.String getCloudAccountName();
```

- *Type:* java.lang.String

---

##### `promoType`<sup>Required</sup> <a name="promoType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```java
public java.lang.String getPromoType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">merchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `merchantDefinedData`<sup>Required</sup> <a name="merchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList getMerchantDefinedData();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.get"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.creditCardType">creditCardType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">extBillingAgreementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.lastDigits">lastDigits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.nameOnCard">nameOnCard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.paymentMethod">paymentMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.timeExpiration">timeExpiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">walletInstrumentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.walletTransactionId">walletTransactionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `creditCardType`<sup>Required</sup> <a name="creditCardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```java
public java.lang.String getCreditCardType();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `extBillingAgreementId`<sup>Required</sup> <a name="extBillingAgreementId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```java
public java.lang.String getExtBillingAgreementId();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastDigits`<sup>Required</sup> <a name="lastDigits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```java
public java.lang.String getLastDigits();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `nameOnCard`<sup>Required</sup> <a name="nameOnCard" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```java
public java.lang.String getNameOnCard();
```

- *Type:* java.lang.String

---

##### `paymentMethod`<sup>Required</sup> <a name="paymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```java
public java.lang.String getPaymentMethod();
```

- *Type:* java.lang.String

---

##### `timeExpiration`<sup>Required</sup> <a name="timeExpiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```java
public java.lang.String getTimeExpiration();
```

- *Type:* java.lang.String

---

##### `walletInstrumentId`<sup>Required</sup> <a name="walletInstrumentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```java
public java.lang.String getWalletInstrumentId();
```

- *Type:* java.lang.String

---

##### `walletTransactionId`<sup>Required</sup> <a name="walletTransactionId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```java
public java.lang.String getWalletTransactionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.get"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.noTaxReasonCode">noTaxReasonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">noTaxReasonCodeDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxCnpj">taxCnpj</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxPayerId">taxPayerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxRegNumber">taxRegNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `noTaxReasonCode`<sup>Required</sup> <a name="noTaxReasonCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```java
public java.lang.String getNoTaxReasonCode();
```

- *Type:* java.lang.String

---

##### `noTaxReasonCodeDetails`<sup>Required</sup> <a name="noTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```java
public java.lang.String getNoTaxReasonCodeDetails();
```

- *Type:* java.lang.String

---

##### `taxCnpj`<sup>Required</sup> <a name="taxCnpj" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```java
public java.lang.String getTaxCnpj();
```

- *Type:* java.lang.String

---

##### `taxPayerId`<sup>Required</sup> <a name="taxPayerId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```java
public java.lang.String getTaxPayerId();
```

- *Type:* java.lang.String

---

##### `taxRegNumber`<sup>Required</sup> <a name="taxRegNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```java
public java.lang.String getTaxRegNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.get"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.giro">giro</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.noTaxReasonCode">noTaxReasonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.noTaxReasonCodeDetails">noTaxReasonCodeDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxCnpj">taxCnpj</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxPayerId">taxPayerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxRegNumber">taxRegNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `giro`<sup>Required</sup> <a name="giro" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.giro"></a>

```java
public java.lang.String getGiro();
```

- *Type:* java.lang.String

---

##### `noTaxReasonCode`<sup>Required</sup> <a name="noTaxReasonCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.noTaxReasonCode"></a>

```java
public java.lang.String getNoTaxReasonCode();
```

- *Type:* java.lang.String

---

##### `noTaxReasonCodeDetails`<sup>Required</sup> <a name="noTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```java
public java.lang.String getNoTaxReasonCodeDetails();
```

- *Type:* java.lang.String

---

##### `taxCnpj`<sup>Required</sup> <a name="taxCnpj" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxCnpj"></a>

```java
public java.lang.String getTaxCnpj();
```

- *Type:* java.lang.String

---

##### `taxPayerId`<sup>Required</sup> <a name="taxPayerId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxPayerId"></a>

```java
public java.lang.String getTaxPayerId();
```

- *Type:* java.lang.String

---

##### `taxRegNumber`<sup>Required</sup> <a name="taxRegNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxRegNumber"></a>

```java
public java.lang.String getTaxRegNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.get"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_subscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference;

new DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection">DataOciOspGatewaySubscriptionsSubscriptionCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.items"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewaySubscriptionsSubscriptionCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection">DataOciOspGatewaySubscriptionsSubscriptionCollection</a>

---



