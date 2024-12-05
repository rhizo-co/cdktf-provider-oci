# `dataOciPsqlDbSystemConnectionDetail` Submodule <a name="`dataOciPsqlDbSystemConnectionDetail` Submodule" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciPsqlDbSystemConnectionDetail <a name="DataOciPsqlDbSystemConnectionDetail" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail oci_psql_db_system_connection_detail}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer"></a>

```typescript
import { dataOciPsqlDbSystemConnectionDetail } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail(scope: Construct, id: string, config: DataOciPsqlDbSystemConnectionDetailConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig">DataOciPsqlDbSystemConnectionDetailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig">DataOciPsqlDbSystemConnectionDetailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciPsqlDbSystemConnectionDetail resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isConstruct"></a>

```typescript
import { dataOciPsqlDbSystemConnectionDetail } from 'rhizo-co-terraform-provider-oci'

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformElement"></a>

```typescript
import { dataOciPsqlDbSystemConnectionDetail } from 'rhizo-co-terraform-provider-oci'

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformDataSource"></a>

```typescript
import { dataOciPsqlDbSystemConnectionDetail } from 'rhizo-co-terraform-provider-oci'

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport"></a>

```typescript
import { dataOciPsqlDbSystemConnectionDetail } from 'rhizo-co-terraform-provider-oci'

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciPsqlDbSystemConnectionDetail resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciPsqlDbSystemConnectionDetail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciPsqlDbSystemConnectionDetail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciPsqlDbSystemConnectionDetail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.instanceEndpoints">instanceEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.primaryDbEndpoint">primaryDbEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList">DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `instanceEndpoints`<sup>Required</sup> <a name="instanceEndpoints" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.instanceEndpoints"></a>

```typescript
public readonly instanceEndpoints: DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList</a>

---

##### `primaryDbEndpoint`<sup>Required</sup> <a name="primaryDbEndpoint" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.primaryDbEndpoint"></a>

```typescript
public readonly primaryDbEndpoint: DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList">DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList</a>

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dbSystemIdInput"></a>

```typescript
public readonly dbSystemIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciPsqlDbSystemConnectionDetailConfig <a name="DataOciPsqlDbSystemConnectionDetailConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.Initializer"></a>

```typescript
import { dataOciPsqlDbSystemConnectionDetail } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemConnectionDetailConfig: dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#db_system_id DataOciPsqlDbSystemConnectionDetail#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#id DataOciPsqlDbSystemConnectionDetail#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#db_system_id DataOciPsqlDbSystemConnectionDetail#db_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#id DataOciPsqlDbSystemConnectionDetail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciPsqlDbSystemConnectionDetailInstanceEndpoints <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpoints" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints.Initializer"></a>

```typescript
import { dataOciPsqlDbSystemConnectionDetail } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemConnectionDetailInstanceEndpoints: dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints = { ... }
```


### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint.Initializer"></a>

```typescript
import { dataOciPsqlDbSystemConnectionDetail } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint: dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint = { ... }
```


### DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint <a name="DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint.Initializer"></a>

```typescript
import { dataOciPsqlDbSystemConnectionDetail } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint: dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer"></a>

```typescript
import { dataOciPsqlDbSystemConnectionDetail } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.get"></a>

```typescript
public get(index: number): DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDbSystemConnectionDetail } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint</a>

---


### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer"></a>

```typescript
import { dataOciPsqlDbSystemConnectionDetail } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.get"></a>

```typescript
public get(index: number): DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDbSystemConnectionDetail } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.dbInstanceId">dbInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints">DataOciPsqlDbSystemConnectionDetailInstanceEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbInstanceId`<sup>Required</sup> <a name="dbInstanceId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.dbInstanceId"></a>

```typescript
public readonly dbInstanceId: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDbSystemConnectionDetailInstanceEndpoints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints">DataOciPsqlDbSystemConnectionDetailInstanceEndpoints</a>

---


### DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList <a name="DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer"></a>

```typescript
import { dataOciPsqlDbSystemConnectionDetail } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.get"></a>

```typescript
public get(index: number): DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference <a name="DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDbSystemConnectionDetail } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint">DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint">DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint</a>

---



