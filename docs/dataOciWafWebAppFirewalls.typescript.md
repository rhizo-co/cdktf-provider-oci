# `dataOciWafWebAppFirewalls` Submodule <a name="`dataOciWafWebAppFirewalls` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafWebAppFirewalls <a name="DataOciWafWebAppFirewalls" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls oci_waf_web_app_firewalls}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewalls } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls(scope: Construct, id: string, config: DataOciWafWebAppFirewallsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig">DataOciWafWebAppFirewallsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig">DataOciWafWebAppFirewallsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetWebAppFirewallPolicyId">resetWebAppFirewallPolicyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciWafWebAppFirewallsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetState"></a>

```typescript
public resetState(): void
```

##### `resetWebAppFirewallPolicyId` <a name="resetWebAppFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetWebAppFirewallPolicyId"></a>

```typescript
public resetWebAppFirewallPolicyId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWafWebAppFirewalls resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isConstruct"></a>

```typescript
import { dataOciWafWebAppFirewalls } from 'rhizo-co-terraform-provider-oci'

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformElement"></a>

```typescript
import { dataOciWafWebAppFirewalls } from 'rhizo-co-terraform-provider-oci'

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformDataSource"></a>

```typescript
import { dataOciWafWebAppFirewalls } from 'rhizo-co-terraform-provider-oci'

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport"></a>

```typescript
import { dataOciWafWebAppFirewalls } from 'rhizo-co-terraform-provider-oci'

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciWafWebAppFirewalls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciWafWebAppFirewalls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciWafWebAppFirewalls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafWebAppFirewalls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList">DataOciWafWebAppFirewallsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallCollection">webAppFirewallCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList">DataOciWafWebAppFirewallsWebAppFirewallCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.stateInput">stateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallPolicyIdInput">webAppFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.state">state</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallPolicyId">webAppFirewallPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.filter"></a>

```typescript
public readonly filter: DataOciWafWebAppFirewallsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList">DataOciWafWebAppFirewallsFilterList</a>

---

##### `webAppFirewallCollection`<sup>Required</sup> <a name="webAppFirewallCollection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallCollection"></a>

```typescript
public readonly webAppFirewallCollection: DataOciWafWebAppFirewallsWebAppFirewallCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList">DataOciWafWebAppFirewallsWebAppFirewallCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciWafWebAppFirewallsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.stateInput"></a>

```typescript
public readonly stateInput: string[];
```

- *Type:* string[]

---

##### `webAppFirewallPolicyIdInput`<sup>Optional</sup> <a name="webAppFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallPolicyIdInput"></a>

```typescript
public readonly webAppFirewallPolicyIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

---

##### `webAppFirewallPolicyId`<sup>Required</sup> <a name="webAppFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallPolicyId"></a>

```typescript
public readonly webAppFirewallPolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafWebAppFirewallsConfig <a name="DataOciWafWebAppFirewallsConfig" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewalls } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallsConfig: dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#compartment_id DataOciWafWebAppFirewalls#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#display_name DataOciWafWebAppFirewalls#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#id DataOciWafWebAppFirewalls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.state">state</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#state DataOciWafWebAppFirewalls#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.webAppFirewallPolicyId">webAppFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#web_app_firewall_policy_id DataOciWafWebAppFirewalls#web_app_firewall_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#compartment_id DataOciWafWebAppFirewalls#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#display_name DataOciWafWebAppFirewalls#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciWafWebAppFirewallsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#filter DataOciWafWebAppFirewalls#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#id DataOciWafWebAppFirewalls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#state DataOciWafWebAppFirewalls#state}.

---

##### `webAppFirewallPolicyId`<sup>Optional</sup> <a name="webAppFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.webAppFirewallPolicyId"></a>

```typescript
public readonly webAppFirewallPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#web_app_firewall_policy_id DataOciWafWebAppFirewalls#web_app_firewall_policy_id}.

---

### DataOciWafWebAppFirewallsFilter <a name="DataOciWafWebAppFirewallsFilter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewalls } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallsFilter: dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#name DataOciWafWebAppFirewalls#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#values DataOciWafWebAppFirewalls#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#regex DataOciWafWebAppFirewalls#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#name DataOciWafWebAppFirewalls#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#values DataOciWafWebAppFirewalls#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#regex DataOciWafWebAppFirewalls#regex}.

---

### DataOciWafWebAppFirewallsWebAppFirewallCollection <a name="DataOciWafWebAppFirewallsWebAppFirewallCollection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollection.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewalls } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallsWebAppFirewallCollection: dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollection = { ... }
```


### DataOciWafWebAppFirewallsWebAppFirewallCollectionItems <a name="DataOciWafWebAppFirewallsWebAppFirewallCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItems.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewalls } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallsWebAppFirewallCollectionItems: dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafWebAppFirewallsFilterList <a name="DataOciWafWebAppFirewallsFilterList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewalls } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciWafWebAppFirewallsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>[]

---


### DataOciWafWebAppFirewallsFilterOutputReference <a name="DataOciWafWebAppFirewallsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewalls } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciWafWebAppFirewallsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>

---


### DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList <a name="DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewalls } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference <a name="DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewalls } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.backendType">backendType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.webAppFirewallPolicyId">webAppFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItems">DataOciWafWebAppFirewallsWebAppFirewallCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendType`<sup>Required</sup> <a name="backendType" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.backendType"></a>

```typescript
public readonly backendType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `webAppFirewallPolicyId`<sup>Required</sup> <a name="webAppFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.webAppFirewallPolicyId"></a>

```typescript
public readonly webAppFirewallPolicyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallsWebAppFirewallCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItems">DataOciWafWebAppFirewallsWebAppFirewallCollectionItems</a>

---


### DataOciWafWebAppFirewallsWebAppFirewallCollectionList <a name="DataOciWafWebAppFirewallsWebAppFirewallCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewalls } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference <a name="DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewalls } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList">DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollection">DataOciWafWebAppFirewallsWebAppFirewallCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList">DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallsWebAppFirewallCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollection">DataOciWafWebAppFirewallsWebAppFirewallCollection</a>

---



