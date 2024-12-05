# `dataOciCoreLocalPeeringGateways` Submodule <a name="`dataOciCoreLocalPeeringGateways` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreLocalPeeringGateways <a name="DataOciCoreLocalPeeringGateways" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways oci_core_local_peering_gateways}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer"></a>

```typescript
import { dataOciCoreLocalPeeringGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways(scope: Construct, id: string, config: DataOciCoreLocalPeeringGatewaysConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig">DataOciCoreLocalPeeringGatewaysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig">DataOciCoreLocalPeeringGatewaysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.resetVcnId">resetVcnId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreLocalPeeringGatewaysFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.resetId"></a>

```typescript
public resetId(): void
```

##### `resetVcnId` <a name="resetVcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.resetVcnId"></a>

```typescript
public resetVcnId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreLocalPeeringGateways resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isConstruct"></a>

```typescript
import { dataOciCoreLocalPeeringGateways } from 'rhizo-co-terraform-provider-oci'

dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isTerraformElement"></a>

```typescript
import { dataOciCoreLocalPeeringGateways } from 'rhizo-co-terraform-provider-oci'

dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isTerraformDataSource"></a>

```typescript
import { dataOciCoreLocalPeeringGateways } from 'rhizo-co-terraform-provider-oci'

dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.generateConfigForImport"></a>

```typescript
import { dataOciCoreLocalPeeringGateways } from 'rhizo-co-terraform-provider-oci'

dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreLocalPeeringGateways resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreLocalPeeringGateways to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreLocalPeeringGateways that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreLocalPeeringGateways to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList">DataOciCoreLocalPeeringGatewaysFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.localPeeringGateways">localPeeringGateways</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList">DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.vcnIdInput">vcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.filter"></a>

```typescript
public readonly filter: DataOciCoreLocalPeeringGatewaysFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList">DataOciCoreLocalPeeringGatewaysFilterList</a>

---

##### `localPeeringGateways`<sup>Required</sup> <a name="localPeeringGateways" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.localPeeringGateways"></a>

```typescript
public readonly localPeeringGateways: DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList">DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreLocalPeeringGatewaysFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.vcnIdInput"></a>

```typescript
public readonly vcnIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreLocalPeeringGatewaysConfig <a name="DataOciCoreLocalPeeringGatewaysConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.Initializer"></a>

```typescript
import { dataOciCoreLocalPeeringGateways } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreLocalPeeringGatewaysConfig: dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#compartment_id DataOciCoreLocalPeeringGateways#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#id DataOciCoreLocalPeeringGateways#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.vcnId">vcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#vcn_id DataOciCoreLocalPeeringGateways#vcn_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#compartment_id DataOciCoreLocalPeeringGateways#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreLocalPeeringGatewaysFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#filter DataOciCoreLocalPeeringGateways#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#id DataOciCoreLocalPeeringGateways#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `vcnId`<sup>Optional</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#vcn_id DataOciCoreLocalPeeringGateways#vcn_id}.

---

### DataOciCoreLocalPeeringGatewaysFilter <a name="DataOciCoreLocalPeeringGatewaysFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter.Initializer"></a>

```typescript
import { dataOciCoreLocalPeeringGateways } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreLocalPeeringGatewaysFilter: dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#name DataOciCoreLocalPeeringGateways#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#values DataOciCoreLocalPeeringGateways#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#regex DataOciCoreLocalPeeringGateways#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#name DataOciCoreLocalPeeringGateways#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#values DataOciCoreLocalPeeringGateways#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#regex DataOciCoreLocalPeeringGateways#regex}.

---

### DataOciCoreLocalPeeringGatewaysLocalPeeringGateways <a name="DataOciCoreLocalPeeringGatewaysLocalPeeringGateways" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGateways"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGateways.Initializer"></a>

```typescript
import { dataOciCoreLocalPeeringGateways } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreLocalPeeringGatewaysLocalPeeringGateways: dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGateways = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreLocalPeeringGatewaysFilterList <a name="DataOciCoreLocalPeeringGatewaysFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.Initializer"></a>

```typescript
import { dataOciCoreLocalPeeringGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreLocalPeeringGatewaysFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreLocalPeeringGatewaysFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>[]

---


### DataOciCoreLocalPeeringGatewaysFilterOutputReference <a name="DataOciCoreLocalPeeringGatewaysFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreLocalPeeringGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreLocalPeeringGatewaysFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>

---


### DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList <a name="DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.Initializer"></a>

```typescript
import { dataOciCoreLocalPeeringGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.get"></a>

```typescript
public get(index: number): DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference <a name="DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer"></a>

```typescript
import { dataOciCoreLocalPeeringGateways } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.isCrossTenancyPeering">isCrossTenancyPeering</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peerAdvertisedCidr">peerAdvertisedCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peerAdvertisedCidrDetails">peerAdvertisedCidrDetails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peerId">peerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peeringStatus">peeringStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peeringStatusDetails">peeringStatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.routeTableId">routeTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGateways">DataOciCoreLocalPeeringGatewaysLocalPeeringGateways</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCrossTenancyPeering`<sup>Required</sup> <a name="isCrossTenancyPeering" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.isCrossTenancyPeering"></a>

```typescript
public readonly isCrossTenancyPeering: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `peerAdvertisedCidr`<sup>Required</sup> <a name="peerAdvertisedCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peerAdvertisedCidr"></a>

```typescript
public readonly peerAdvertisedCidr: string;
```

- *Type:* string

---

##### `peerAdvertisedCidrDetails`<sup>Required</sup> <a name="peerAdvertisedCidrDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peerAdvertisedCidrDetails"></a>

```typescript
public readonly peerAdvertisedCidrDetails: string[];
```

- *Type:* string[]

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peerId"></a>

```typescript
public readonly peerId: string;
```

- *Type:* string

---

##### `peeringStatus`<sup>Required</sup> <a name="peeringStatus" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peeringStatus"></a>

```typescript
public readonly peeringStatus: string;
```

- *Type:* string

---

##### `peeringStatusDetails`<sup>Required</sup> <a name="peeringStatusDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peeringStatusDetails"></a>

```typescript
public readonly peeringStatusDetails: string;
```

- *Type:* string

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreLocalPeeringGatewaysLocalPeeringGateways;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGateways">DataOciCoreLocalPeeringGatewaysLocalPeeringGateways</a>

---



