# `dataOciApigatewayGateways` Submodule <a name="`dataOciApigatewayGateways` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApigatewayGateways <a name="DataOciApigatewayGateways" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways oci_apigateway_gateways}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayGateways.DataOciApigatewayGateways(scope: Construct, id: string, config: DataOciApigatewayGatewaysConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig">DataOciApigatewayGatewaysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig">DataOciApigatewayGatewaysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciApigatewayGatewaysFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>[]

---

##### `resetCertificateId` <a name="resetCertificateId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetCertificateId"></a>

```typescript
public resetCertificateId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApigatewayGateways resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isConstruct"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

dataOciApigatewayGateways.DataOciApigatewayGateways.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isTerraformElement"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

dataOciApigatewayGateways.DataOciApigatewayGateways.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isTerraformDataSource"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

dataOciApigatewayGateways.DataOciApigatewayGateways.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.generateConfigForImport"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

dataOciApigatewayGateways.DataOciApigatewayGateways.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciApigatewayGateways resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApigatewayGateways to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApigatewayGateways that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApigatewayGateways to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList">DataOciApigatewayGatewaysFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.gatewayCollection">gatewayCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList">DataOciApigatewayGatewaysGatewayCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.filter"></a>

```typescript
public readonly filter: DataOciApigatewayGatewaysFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList">DataOciApigatewayGatewaysFilterList</a>

---

##### `gatewayCollection`<sup>Required</sup> <a name="gatewayCollection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.gatewayCollection"></a>

```typescript
public readonly gatewayCollection: DataOciApigatewayGatewaysGatewayCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList">DataOciApigatewayGatewaysGatewayCollectionList</a>

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciApigatewayGatewaysFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApigatewayGatewaysConfig <a name="DataOciApigatewayGatewaysConfig" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayGatewaysConfig: dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#compartment_id DataOciApigatewayGateways#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.certificateId">certificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#certificate_id DataOciApigatewayGateways#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#display_name DataOciApigatewayGateways#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#id DataOciApigatewayGateways#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#state DataOciApigatewayGateways#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#compartment_id DataOciApigatewayGateways#compartment_id}.

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#certificate_id DataOciApigatewayGateways#certificate_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#display_name DataOciApigatewayGateways#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciApigatewayGatewaysFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#filter DataOciApigatewayGateways#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#id DataOciApigatewayGateways#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#state DataOciApigatewayGateways#state}.

---

### DataOciApigatewayGatewaysFilter <a name="DataOciApigatewayGatewaysFilter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayGatewaysFilter: dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#name DataOciApigatewayGateways#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#values DataOciApigatewayGateways#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#regex DataOciApigatewayGateways#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#name DataOciApigatewayGateways#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#values DataOciApigatewayGateways#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#regex DataOciApigatewayGateways#regex}.

---

### DataOciApigatewayGatewaysGatewayCollection <a name="DataOciApigatewayGatewaysGatewayCollection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollection.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayGatewaysGatewayCollection: dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollection = { ... }
```


### DataOciApigatewayGatewaysGatewayCollectionCaBundles <a name="DataOciApigatewayGatewaysGatewayCollectionCaBundles" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundles.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayGatewaysGatewayCollectionCaBundles: dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundles = { ... }
```


### DataOciApigatewayGatewaysGatewayCollectionIpAddresses <a name="DataOciApigatewayGatewaysGatewayCollectionIpAddresses" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddresses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddresses.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayGatewaysGatewayCollectionIpAddresses: dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddresses = { ... }
```


### DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails <a name="DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails: dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails = { ... }
```


### DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers <a name="DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers: dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApigatewayGatewaysFilterList <a name="DataOciApigatewayGatewaysFilterList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.get"></a>

```typescript
public get(index: number): DataOciApigatewayGatewaysFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciApigatewayGatewaysFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>[]

---


### DataOciApigatewayGatewaysFilterOutputReference <a name="DataOciApigatewayGatewaysFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciApigatewayGatewaysFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>

---


### DataOciApigatewayGatewaysGatewayCollectionCaBundlesList <a name="DataOciApigatewayGatewaysGatewayCollectionCaBundlesList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.get"></a>

```typescript
public get(index: number): DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference <a name="DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.caBundleId">caBundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundles">DataOciApigatewayGatewaysGatewayCollectionCaBundles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caBundleId`<sup>Required</sup> <a name="caBundleId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.caBundleId"></a>

```typescript
public readonly caBundleId: string;
```

- *Type:* string

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApigatewayGatewaysGatewayCollectionCaBundles;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundles">DataOciApigatewayGatewaysGatewayCollectionCaBundles</a>

---


### DataOciApigatewayGatewaysGatewayCollectionIpAddressesList <a name="DataOciApigatewayGatewaysGatewayCollectionIpAddressesList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.get"></a>

```typescript
public get(index: number): DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference <a name="DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddresses">DataOciApigatewayGatewaysGatewayCollectionIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApigatewayGatewaysGatewayCollectionIpAddresses;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddresses">DataOciApigatewayGatewaysGatewayCollectionIpAddresses</a>

---


### DataOciApigatewayGatewaysGatewayCollectionList <a name="DataOciApigatewayGatewaysGatewayCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.get"></a>

```typescript
public get(index: number): DataOciApigatewayGatewaysGatewayCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApigatewayGatewaysGatewayCollectionOutputReference <a name="DataOciApigatewayGatewaysGatewayCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.caBundles">caBundles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList">DataOciApigatewayGatewaysGatewayCollectionCaBundlesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.ipAddresses">ipAddresses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList">DataOciApigatewayGatewaysGatewayCollectionIpAddressesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.responseCacheDetails">responseCacheDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList">DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollection">DataOciApigatewayGatewaysGatewayCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caBundles`<sup>Required</sup> <a name="caBundles" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.caBundles"></a>

```typescript
public readonly caBundles: DataOciApigatewayGatewaysGatewayCollectionCaBundlesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList">DataOciApigatewayGatewaysGatewayCollectionCaBundlesList</a>

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: DataOciApigatewayGatewaysGatewayCollectionIpAddressesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList">DataOciApigatewayGatewaysGatewayCollectionIpAddressesList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `networkSecurityGroupIds`<sup>Required</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.networkSecurityGroupIds"></a>

```typescript
public readonly networkSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `responseCacheDetails`<sup>Required</sup> <a name="responseCacheDetails" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.responseCacheDetails"></a>

```typescript
public readonly responseCacheDetails: DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList">DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApigatewayGatewaysGatewayCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollection">DataOciApigatewayGatewaysGatewayCollection</a>

---


### DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList <a name="DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.get"></a>

```typescript
public get(index: number): DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference <a name="DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.authenticationSecretId">authenticationSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.authenticationSecretVersionNumber">authenticationSecretVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.connectTimeoutInMs">connectTimeoutInMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.isSslEnabled">isSslEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.isSslVerifyDisabled">isSslVerifyDisabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.readTimeoutInMs">readTimeoutInMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.sendTimeoutInMs">sendTimeoutInMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.servers">servers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList">DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails">DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationSecretId`<sup>Required</sup> <a name="authenticationSecretId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.authenticationSecretId"></a>

```typescript
public readonly authenticationSecretId: string;
```

- *Type:* string

---

##### `authenticationSecretVersionNumber`<sup>Required</sup> <a name="authenticationSecretVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.authenticationSecretVersionNumber"></a>

```typescript
public readonly authenticationSecretVersionNumber: string;
```

- *Type:* string

---

##### `connectTimeoutInMs`<sup>Required</sup> <a name="connectTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.connectTimeoutInMs"></a>

```typescript
public readonly connectTimeoutInMs: number;
```

- *Type:* number

---

##### `isSslEnabled`<sup>Required</sup> <a name="isSslEnabled" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.isSslEnabled"></a>

```typescript
public readonly isSslEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSslVerifyDisabled`<sup>Required</sup> <a name="isSslVerifyDisabled" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.isSslVerifyDisabled"></a>

```typescript
public readonly isSslVerifyDisabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `readTimeoutInMs`<sup>Required</sup> <a name="readTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.readTimeoutInMs"></a>

```typescript
public readonly readTimeoutInMs: number;
```

- *Type:* number

---

##### `sendTimeoutInMs`<sup>Required</sup> <a name="sendTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.sendTimeoutInMs"></a>

```typescript
public readonly sendTimeoutInMs: number;
```

- *Type:* number

---

##### `servers`<sup>Required</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.servers"></a>

```typescript
public readonly servers: DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList">DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails">DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails</a>

---


### DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList <a name="DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.get"></a>

```typescript
public get(index: number): DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference <a name="DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer"></a>

```typescript
import { dataOciApigatewayGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers">DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers">DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers</a>

---



