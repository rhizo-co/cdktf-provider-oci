# `odaOdaPrivateEndpointScanProxy` Submodule <a name="`odaOdaPrivateEndpointScanProxy` Submodule" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdaOdaPrivateEndpointScanProxy <a name="OdaOdaPrivateEndpointScanProxy" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy oci_oda_oda_private_endpoint_scan_proxy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.oda_oda_private_endpoint_scan_proxy.OdaOdaPrivateEndpointScanProxy;

OdaOdaPrivateEndpointScanProxy.Builder.create(Construct scope, java.lang.String id)
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
    .odaPrivateEndpointId(java.lang.String)
    .protocol(java.lang.String)
    .scanListenerInfos(IResolvable)
    .scanListenerInfos(java.util.List<OdaOdaPrivateEndpointScanProxyScanListenerInfos>)
    .scanListenerType(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(OdaOdaPrivateEndpointScanProxyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.odaPrivateEndpointId">odaPrivateEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_id OdaOdaPrivateEndpointScanProxy#oda_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#protocol OdaOdaPrivateEndpointScanProxy#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.scanListenerInfos">scanListenerInfos</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos">OdaOdaPrivateEndpointScanProxyScanListenerInfos</a>></code> | scan_listener_infos block. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.scanListenerType">scanListenerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_type OdaOdaPrivateEndpointScanProxy#scan_listener_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#id OdaOdaPrivateEndpointScanProxy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts">OdaOdaPrivateEndpointScanProxyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `odaPrivateEndpointId`<sup>Required</sup> <a name="odaPrivateEndpointId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.odaPrivateEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_id OdaOdaPrivateEndpointScanProxy#oda_private_endpoint_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#protocol OdaOdaPrivateEndpointScanProxy#protocol}.

---

##### `scanListenerInfos`<sup>Required</sup> <a name="scanListenerInfos" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.scanListenerInfos"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos">OdaOdaPrivateEndpointScanProxyScanListenerInfos</a>>

scan_listener_infos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_infos OdaOdaPrivateEndpointScanProxy#scan_listener_infos}

---

##### `scanListenerType`<sup>Required</sup> <a name="scanListenerType" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.scanListenerType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_type OdaOdaPrivateEndpointScanProxy#scan_listener_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#id OdaOdaPrivateEndpointScanProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts">OdaOdaPrivateEndpointScanProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#timeouts OdaOdaPrivateEndpointScanProxy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putScanListenerInfos">putScanListenerInfos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScanListenerInfos` <a name="putScanListenerInfos" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putScanListenerInfos"></a>

```java
public void putScanListenerInfos(IResolvable OR java.util.List<OdaOdaPrivateEndpointScanProxyScanListenerInfos> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putScanListenerInfos.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos">OdaOdaPrivateEndpointScanProxyScanListenerInfos</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putTimeouts"></a>

```java
public void putTimeouts(OdaOdaPrivateEndpointScanProxyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts">OdaOdaPrivateEndpointScanProxyTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OdaOdaPrivateEndpointScanProxy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.oda_oda_private_endpoint_scan_proxy.OdaOdaPrivateEndpointScanProxy;

OdaOdaPrivateEndpointScanProxy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.oda_oda_private_endpoint_scan_proxy.OdaOdaPrivateEndpointScanProxy;

OdaOdaPrivateEndpointScanProxy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.oda_oda_private_endpoint_scan_proxy.OdaOdaPrivateEndpointScanProxy;

OdaOdaPrivateEndpointScanProxy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.oda_oda_private_endpoint_scan_proxy.OdaOdaPrivateEndpointScanProxy;

OdaOdaPrivateEndpointScanProxy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OdaOdaPrivateEndpointScanProxy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OdaOdaPrivateEndpointScanProxy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OdaOdaPrivateEndpointScanProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OdaOdaPrivateEndpointScanProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OdaOdaPrivateEndpointScanProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerInfos">scanListenerInfos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList">OdaOdaPrivateEndpointScanProxyScanListenerInfosList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference">OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointIdInput">odaPrivateEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerInfosInput">scanListenerInfosInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos">OdaOdaPrivateEndpointScanProxyScanListenerInfos</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerTypeInput">scanListenerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts">OdaOdaPrivateEndpointScanProxyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointId">odaPrivateEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerType">scanListenerType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scanListenerInfos`<sup>Required</sup> <a name="scanListenerInfos" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerInfos"></a>

```java
public OdaOdaPrivateEndpointScanProxyScanListenerInfosList getScanListenerInfos();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList">OdaOdaPrivateEndpointScanProxyScanListenerInfosList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeouts"></a>

```java
public OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference">OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `odaPrivateEndpointIdInput`<sup>Optional</sup> <a name="odaPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointIdInput"></a>

```java
public java.lang.String getOdaPrivateEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `scanListenerInfosInput`<sup>Optional</sup> <a name="scanListenerInfosInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerInfosInput"></a>

```java
public java.lang.Object getScanListenerInfosInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos">OdaOdaPrivateEndpointScanProxyScanListenerInfos</a>>

---

##### `scanListenerTypeInput`<sup>Optional</sup> <a name="scanListenerTypeInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerTypeInput"></a>

```java
public java.lang.String getScanListenerTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts">OdaOdaPrivateEndpointScanProxyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `odaPrivateEndpointId`<sup>Required</sup> <a name="odaPrivateEndpointId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointId"></a>

```java
public java.lang.String getOdaPrivateEndpointId();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `scanListenerType`<sup>Required</sup> <a name="scanListenerType" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerType"></a>

```java
public java.lang.String getScanListenerType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OdaOdaPrivateEndpointScanProxyConfig <a name="OdaOdaPrivateEndpointScanProxyConfig" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.oda_oda_private_endpoint_scan_proxy.OdaOdaPrivateEndpointScanProxyConfig;

OdaOdaPrivateEndpointScanProxyConfig.builder()
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
    .odaPrivateEndpointId(java.lang.String)
    .protocol(java.lang.String)
    .scanListenerInfos(IResolvable)
    .scanListenerInfos(java.util.List<OdaOdaPrivateEndpointScanProxyScanListenerInfos>)
    .scanListenerType(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(OdaOdaPrivateEndpointScanProxyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.odaPrivateEndpointId">odaPrivateEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_id OdaOdaPrivateEndpointScanProxy#oda_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#protocol OdaOdaPrivateEndpointScanProxy#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.scanListenerInfos">scanListenerInfos</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos">OdaOdaPrivateEndpointScanProxyScanListenerInfos</a>></code> | scan_listener_infos block. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.scanListenerType">scanListenerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_type OdaOdaPrivateEndpointScanProxy#scan_listener_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#id OdaOdaPrivateEndpointScanProxy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts">OdaOdaPrivateEndpointScanProxyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `odaPrivateEndpointId`<sup>Required</sup> <a name="odaPrivateEndpointId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.odaPrivateEndpointId"></a>

```java
public java.lang.String getOdaPrivateEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_id OdaOdaPrivateEndpointScanProxy#oda_private_endpoint_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#protocol OdaOdaPrivateEndpointScanProxy#protocol}.

---

##### `scanListenerInfos`<sup>Required</sup> <a name="scanListenerInfos" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.scanListenerInfos"></a>

```java
public java.lang.Object getScanListenerInfos();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos">OdaOdaPrivateEndpointScanProxyScanListenerInfos</a>>

scan_listener_infos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_infos OdaOdaPrivateEndpointScanProxy#scan_listener_infos}

---

##### `scanListenerType`<sup>Required</sup> <a name="scanListenerType" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.scanListenerType"></a>

```java
public java.lang.String getScanListenerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_type OdaOdaPrivateEndpointScanProxy#scan_listener_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#id OdaOdaPrivateEndpointScanProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.timeouts"></a>

```java
public OdaOdaPrivateEndpointScanProxyTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts">OdaOdaPrivateEndpointScanProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#timeouts OdaOdaPrivateEndpointScanProxy#timeouts}

---

### OdaOdaPrivateEndpointScanProxyScanListenerInfos <a name="OdaOdaPrivateEndpointScanProxyScanListenerInfos" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.oda_oda_private_endpoint_scan_proxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos;

OdaOdaPrivateEndpointScanProxyScanListenerInfos.builder()
//  .scanListenerFqdn(java.lang.String)
//  .scanListenerIp(java.lang.String)
//  .scanListenerPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerFqdn">scanListenerFqdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_fqdn OdaOdaPrivateEndpointScanProxy#scan_listener_fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerIp">scanListenerIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_ip OdaOdaPrivateEndpointScanProxy#scan_listener_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerPort">scanListenerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_port OdaOdaPrivateEndpointScanProxy#scan_listener_port}. |

---

##### `scanListenerFqdn`<sup>Optional</sup> <a name="scanListenerFqdn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerFqdn"></a>

```java
public java.lang.String getScanListenerFqdn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_fqdn OdaOdaPrivateEndpointScanProxy#scan_listener_fqdn}.

---

##### `scanListenerIp`<sup>Optional</sup> <a name="scanListenerIp" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerIp"></a>

```java
public java.lang.String getScanListenerIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_ip OdaOdaPrivateEndpointScanProxy#scan_listener_ip}.

---

##### `scanListenerPort`<sup>Optional</sup> <a name="scanListenerPort" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerPort"></a>

```java
public java.lang.Number getScanListenerPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_port OdaOdaPrivateEndpointScanProxy#scan_listener_port}.

---

### OdaOdaPrivateEndpointScanProxyTimeouts <a name="OdaOdaPrivateEndpointScanProxyTimeouts" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.oda_oda_private_endpoint_scan_proxy.OdaOdaPrivateEndpointScanProxyTimeouts;

OdaOdaPrivateEndpointScanProxyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#create OdaOdaPrivateEndpointScanProxy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#delete OdaOdaPrivateEndpointScanProxy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#update OdaOdaPrivateEndpointScanProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#create OdaOdaPrivateEndpointScanProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#delete OdaOdaPrivateEndpointScanProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#update OdaOdaPrivateEndpointScanProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OdaOdaPrivateEndpointScanProxyScanListenerInfosList <a name="OdaOdaPrivateEndpointScanProxyScanListenerInfosList" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.oda_oda_private_endpoint_scan_proxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList;

new OdaOdaPrivateEndpointScanProxyScanListenerInfosList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.get"></a>

```java
public OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos">OdaOdaPrivateEndpointScanProxyScanListenerInfos</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos">OdaOdaPrivateEndpointScanProxyScanListenerInfos</a>>

---


### OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference <a name="OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.oda_oda_private_endpoint_scan_proxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference;

new OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerFqdn">resetScanListenerFqdn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerIp">resetScanListenerIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerPort">resetScanListenerPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScanListenerFqdn` <a name="resetScanListenerFqdn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerFqdn"></a>

```java
public void resetScanListenerFqdn()
```

##### `resetScanListenerIp` <a name="resetScanListenerIp" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerIp"></a>

```java
public void resetScanListenerIp()
```

##### `resetScanListenerPort` <a name="resetScanListenerPort" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerPort"></a>

```java
public void resetScanListenerPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerFqdnInput">scanListenerFqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerIpInput">scanListenerIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerPortInput">scanListenerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerFqdn">scanListenerFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerIp">scanListenerIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerPort">scanListenerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos">OdaOdaPrivateEndpointScanProxyScanListenerInfos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scanListenerFqdnInput`<sup>Optional</sup> <a name="scanListenerFqdnInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerFqdnInput"></a>

```java
public java.lang.String getScanListenerFqdnInput();
```

- *Type:* java.lang.String

---

##### `scanListenerIpInput`<sup>Optional</sup> <a name="scanListenerIpInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerIpInput"></a>

```java
public java.lang.String getScanListenerIpInput();
```

- *Type:* java.lang.String

---

##### `scanListenerPortInput`<sup>Optional</sup> <a name="scanListenerPortInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerPortInput"></a>

```java
public java.lang.Number getScanListenerPortInput();
```

- *Type:* java.lang.Number

---

##### `scanListenerFqdn`<sup>Required</sup> <a name="scanListenerFqdn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerFqdn"></a>

```java
public java.lang.String getScanListenerFqdn();
```

- *Type:* java.lang.String

---

##### `scanListenerIp`<sup>Required</sup> <a name="scanListenerIp" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerIp"></a>

```java
public java.lang.String getScanListenerIp();
```

- *Type:* java.lang.String

---

##### `scanListenerPort`<sup>Required</sup> <a name="scanListenerPort" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerPort"></a>

```java
public java.lang.Number getScanListenerPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos">OdaOdaPrivateEndpointScanProxyScanListenerInfos</a>

---


### OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference <a name="OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.oda_oda_private_endpoint_scan_proxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference;

new OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts">OdaOdaPrivateEndpointScanProxyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts">OdaOdaPrivateEndpointScanProxyTimeouts</a>

---



