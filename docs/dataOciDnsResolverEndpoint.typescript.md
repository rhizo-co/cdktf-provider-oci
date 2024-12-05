# `dataOciDnsResolverEndpoint` Submodule <a name="`dataOciDnsResolverEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDnsResolverEndpoint <a name="DataOciDnsResolverEndpoint" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoint oci_dns_resolver_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.Initializer"></a>

```typescript
import { dataOciDnsResolverEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint(scope: Construct, id: string, config: DataOciDnsResolverEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig">DataOciDnsResolverEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig">DataOciDnsResolverEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetScope` <a name="resetScope" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.resetScope"></a>

```typescript
public resetScope(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDnsResolverEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.isConstruct"></a>

```typescript
import { dataOciDnsResolverEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.isTerraformElement"></a>

```typescript
import { dataOciDnsResolverEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.isTerraformDataSource"></a>

```typescript
import { dataOciDnsResolverEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.generateConfigForImport"></a>

```typescript
import { dataOciDnsResolverEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDnsResolverEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDnsResolverEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDnsResolverEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDnsResolverEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.forwardingAddress">forwardingAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.isForwarding">isForwarding</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.isListening">isListening</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.listeningAddress">listeningAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.selfAttribute">selfAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.resolverEndpointNameInput">resolverEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.resolverIdInput">resolverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.resolverEndpointName">resolverEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.resolverId">resolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `forwardingAddress`<sup>Required</sup> <a name="forwardingAddress" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.forwardingAddress"></a>

```typescript
public readonly forwardingAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isForwarding`<sup>Required</sup> <a name="isForwarding" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.isForwarding"></a>

```typescript
public readonly isForwarding: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isListening`<sup>Required</sup> <a name="isListening" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.isListening"></a>

```typescript
public readonly isListening: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `listeningAddress`<sup>Required</sup> <a name="listeningAddress" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.listeningAddress"></a>

```typescript
public readonly listeningAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `resolverEndpointNameInput`<sup>Optional</sup> <a name="resolverEndpointNameInput" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.resolverEndpointNameInput"></a>

```typescript
public readonly resolverEndpointNameInput: string;
```

- *Type:* string

---

##### `resolverIdInput`<sup>Optional</sup> <a name="resolverIdInput" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.resolverIdInput"></a>

```typescript
public readonly resolverIdInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `resolverEndpointName`<sup>Required</sup> <a name="resolverEndpointName" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.resolverEndpointName"></a>

```typescript
public readonly resolverEndpointName: string;
```

- *Type:* string

---

##### `resolverId`<sup>Required</sup> <a name="resolverId" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.resolverId"></a>

```typescript
public readonly resolverId: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDnsResolverEndpointConfig <a name="DataOciDnsResolverEndpointConfig" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.Initializer"></a>

```typescript
import { dataOciDnsResolverEndpoint } from 'rhizo-co-terraform-provider-oci'

const dataOciDnsResolverEndpointConfig: dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.resolverEndpointName">resolverEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoint#resolver_endpoint_name DataOciDnsResolverEndpoint#resolver_endpoint_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.resolverId">resolverId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoint#resolver_id DataOciDnsResolverEndpoint#resolver_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoint#scope DataOciDnsResolverEndpoint#scope}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resolverEndpointName`<sup>Required</sup> <a name="resolverEndpointName" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.resolverEndpointName"></a>

```typescript
public readonly resolverEndpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoint#resolver_endpoint_name DataOciDnsResolverEndpoint#resolver_endpoint_name}.

---

##### `resolverId`<sup>Required</sup> <a name="resolverId" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.resolverId"></a>

```typescript
public readonly resolverId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoint#resolver_id DataOciDnsResolverEndpoint#resolver_id}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoint.DataOciDnsResolverEndpointConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoint#scope DataOciDnsResolverEndpoint#scope}.

---



